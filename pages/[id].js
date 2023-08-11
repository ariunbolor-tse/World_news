import { getCategory } from '../lib/articles';
import Banner from '../components/banner';
import Gallery from '../components/gallery';
import Search from '../components/search';
import BannerSkeleton from '../components/skeletons/banner_skeleton';
import GallerySkeleton from '../components/skeletons/gallery_skeleton';

const DynamicPage = ({ categoryData, id, userInputs, filteredData }) => {
    const {searchQuery, selectedCategory, selectedCountry} = userInputs;
    const isLoading = !categoryData || !id
    console.log('Category Is Loading===>', isLoading);
    if(isLoading){
        return(
            <>
            <BannerSkeleton/>
            <GallerySkeleton/>
            </>
        )
    }

    return (
        <>
            {searchQuery=='' && selectedCategory=='' && selectedCountry==''?
            <div>
            <div className='pt-12'></div>
            <div className='text-center text-2xl font-semibold uppercase '>
                {id} News
            </div>
            <Banner articles={categoryData.articles}/>
            <div className="grid grid-cols-4 gap-4 pb-8">
                {categoryData?.articles?.map((el, index)=>(
                    <Gallery
                    imgUrl={el.urlToImage}
                    title={el.title}
                    description={el.description} 
                    author={el.author} 
                    date={el.publishedAt}
                />
                ))}
            </div>
            </div>
            :
            <Search 
                searchQuery={searchQuery} 
                selectedCategory={selectedCategory} 
                selectedCountry={selectedCountry}
                filteredData={filteredData}
                />
            }
        </>
    );
};

export async function getStaticPaths() {
    const categoryNames = ['Business', 'Health', 'Science', 'Sports'];

    const paths = categoryNames.map((category) => ({
        params: { id: category },
    }));

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const categoryData = await getCategory(params.id);
    return {
        props: {
            categoryData,
            id: params.id
        },
    };
}

export default DynamicPage;
