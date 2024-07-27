import axios from "axios";
import { load } from "cheerio";
import cache from "./cache";

interface Article {
  title: string;
  link: string;
  imageUrl?: string;
}

export const scrapeGoogleNews = async (): Promise<Article[]> => {
  try {
    const cacheKey = "news";
    const cachedData = cache.get<Article[]>(cacheKey);

    if (cachedData) {
      return cachedData;
    }

    const { data } = await axios.get("https://news.google.com");
    const $ = load(data);
    const articles: Article[] = [];

    $("article").each((index, element) => {
      const titleElement = $(element).find("a");
      const title = titleElement.text();
      const link = `https://news.google.com${titleElement
        .attr("href")
        ?.substring(1)}`;

      const imageUrl = $(element).find("img").attr("src");

      articles.push({ title, link, imageUrl });
    });

    cache.set(cacheKey, articles);

    return articles;
  } catch (error) {
    console.error("Error scraping Google News:", error);
    return [];
  }
};
