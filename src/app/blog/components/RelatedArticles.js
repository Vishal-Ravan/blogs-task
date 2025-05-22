'use client';


const articles = [
  {
    title: 'The Ultimate Guide To Full-Body Workouts',
    author: 'Alex Carter',
    description:
      'Discover exercises that target every muscle group, helping you build strength and endurance. Perfect for beginners and season...',
    image: '/banner.png',
  },
  {
    title: '5 Tips For Better Cardio Sessions',
    author: 'Maya Lee',
    description:
      'Improve your cardio performance with these simple yet effective techniques to maximize stamina and get the most from each work...',
    image: '/banner.png',
  },
  {
    title: 'Meal Prep Basics For Gym Enthusiasts',
    author: 'Jordan Smith',
    description:
      'Fuel your workouts with balanced, easy-to-prepare meals. A guide on planning, prepping, and staying consistent with nutrition.',
    image: '/banner.png',
  },
  {
    title: 'Building Core Strength: Exercises And Benefits',
    author: 'Emma Rodriguez',
    description:
      'A strong core is essential for stability and injury prevention. Learn the best exercises to enhance your core power.',
    image: '/banner.png',
  },
];

export default function RelatedArticles() {
  return (
    <section className="related-articles">
      <h2 className="section-title">Related articles</h2>
      <div className="articles-grid">
        {articles.map((article, index) => (
          <div key={index} className="article-card">
            <img src={article.image} alt={article.title} className="article-image" />
            <h3 className="article-title">{article.title}</h3>
            <p className="article-desc">{article.description}</p>
            <p className="article-author">By <strong>{article.author}</strong></p>
          </div>
        ))}
      </div>
    </section>
  );
}
