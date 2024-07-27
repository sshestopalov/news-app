import NewsList from "@/components/NewsList";
import { scrapeGoogleNews } from "@/utils/scrapeNews";

const HomePage: React.FC = async () => {
  const articles = await scrapeGoogleNews();

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <h1 className="text-4xl text-center font-bold mb-8">Google News</h1>
      <NewsList articles={articles} />
    </div>
  );
};

export default HomePage;
