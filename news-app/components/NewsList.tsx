interface Article {
  title: string;
  link: string;
  imageUrl?: string;
}

interface NewsListProps {
  articles: Article[];
}

const NewsList: React.FC<NewsListProps> = ({ articles }) => {
  return (
    <div className="container mx-auto px-4">
      {articles.map((article, index) => (
        <div key={index} className="border-b py-4">
          <div className="flex items-center">
            {article.imageUrl ? (
              <img
                src={article.imageUrl}
                alt={article.title}
                className="w-16 h-16 mr-4 overflow-hidden"
              />
            ) : (
              <div className="w-16 h-16 mr-4 bg-gray-200" />
            )}
            <div>
              <h3 className="text-xl font-semibold">{article.title}</h3>
              <a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                Read more
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsList;
