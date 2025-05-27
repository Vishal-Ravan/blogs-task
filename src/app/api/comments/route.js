import fs from 'fs/promises';
import path from 'path';

const commentsFilePath = path.join(process.cwd(), "src", "app", "data", "comments.json");


export async function GET() {
  try {
    const data = await fs.readFile(commentsFilePath, 'utf-8');
    const comments = JSON.parse(data);
    if (!Array.isArray(comments)) {
      return new Response(JSON.stringify([]), { status: 200 });
    }
    return new Response(JSON.stringify(comments), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify([]), { status: 200 }); 
  }
}

export async function POST(request) {
  try {
    const newComment = await request.json();

    const data = await fs.readFile(commentsFilePath, "utf-8");
    const comments = JSON.parse(data);

    if (!Array.isArray(comments)) {
      throw new Error("Comments data is not an array");
    }

    comments.push(newComment);

    await fs.writeFile(commentsFilePath, JSON.stringify(comments, null, 2));

    return new Response(JSON.stringify({ message: "Comment saved" }), { status: 201 });
  } catch (error) {
    console.error("Error saving comment:", error);
    return new Response(JSON.stringify({ error: "Failed to save comment" }), { status: 500 });
  }
}