import Banner from "../components/banner";
import Highlight from "../components/highlight";
import { getCategory, getEverything} from "../lib/articles";
import Search from "../components/search";
import { getFiltered } from "../lib/articles";
import BannerSkeleton from "../components/skeletons/banner_skeleton";
import HighlightSkeleton from "../components/skeletons/highlight_skeleton";

export async function getServerSideProps(){
  const data = await getEverything()
  const business = await getCategory('business')
  const health = await getCategory('heal')
  const science= await getCategory('sci')
  const sports = await getCategory('sports')

  const filteredData = await getFiltered(); 

  return{
    props:{
      data,
      business,
      health,
      science,
      sports,
      userInputs:{
        searchQuery: '',
        selectedCategory: '',
        selectedCountry: '',
        page: 1
      },
      filteredData
    }
  }
  
}

export default function Home({data, business, health, science, sports, userInputs, filteredData}) {
  const {searchQuery, selectedCategory, selectedCountry, page} = userInputs;

  const businessHighlight = business?.articles?.filter(article => article.urlToImage !== null && article.author !== null && article.topic !==null).slice(0, 5);
  const healthHighlight = health?.articles?.filter(article => article.urlToImage !== null ).slice(0, 5);
  const scienceHighlight = science?.articles?.filter(article => article.urlToImage !== null && article.author !== null && article.topic !==null).slice(0, 5);
  const sportsHighlight = sports?.articles?.filter(article => article.urlToImage !== null ).slice(0, 5);

  return (
    <>
      {searchQuery=='' && selectedCategory=='' && selectedCountry==''?
      <div>
      {data && <Banner articles={data.articles}/>}
      {business && <Highlight articles={businessHighlight} section='Business'/>}
      {health && <Highlight articles={healthHighlight} section='Health'/>}
      {science && <Highlight articles={scienceHighlight} section='Science'/>}
      {sports && <Highlight articles={sportsHighlight} section='Sports'/>}
      </div>
      :
      <Search 
        searchQuery={searchQuery} 
        selectedCategory={selectedCategory} 
        selectedCountry={selectedCountry}
        filteredData={filteredData}
        page={page}
        />
      }
      </>
  );
}

