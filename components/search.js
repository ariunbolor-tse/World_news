import { useEffect, useState } from "react";
import { getFiltered } from "../lib/articles";
import Gallery from "./gallery";
import GallerySkeleton from '../components/skeletons/gallery_skeleton'
import InfiniteScroll from "react-infinite-scroll-component"

const Search = ({filteredData, searchQuery, selectedCategory, selectedCountry, page}) =>{
    const [result, setResult] = useState(filteredData || {})
    const [pageNum, setPageNum]= useState(page || 1)
    const [loading, setLoading] = useState(false)
    const [hasMore, setHasMore]= useState(true)
    
    useEffect(()=>{
        setLoading(true);
        getFiltered(searchQuery, selectedCategory, selectedCountry, pageNum)
            .then((res)=>{
                setResult(res)
                setLoading(false)
        }).catch((e)=>{
            console.log(e)
        })

    }, [searchQuery, selectedCategory, selectedCountry,])

    const getMoreArticles= async()=>{
        await setPageNum(pageNum+1);
        getFiltered(searchQuery, selectedCategory, selectedCountry, pageNum)
            .then((res)=>{
                setResult((prevResult)=>({
                    ...prevResult, 
                    articles:[...prevResult.articles, ...res.articles],     
                    totalResults: res.totalResults,
                }));    
            })
        if(result?.articles?.length>=result.totalResults){
            setHasMore(false);
        }
    }

    return(
        <>
        <div>
            {
                loading === true ? 
                <div>
                <div className="uppercase text-2xl font-thin text-center py-12">
                        <span>{result?.totalResults}</span> 
                        <span> results in </span>
                        {searchQuery ?
                        <span className="font-semibold">"{searchQuery}"</span>
                        : <span></span>}
                        {selectedCategory?
                        <span>"{selectedCategory}"</span>
                        : <span></span>}
                        {selectedCountry?
                        <span>"{selectedCountry}"</span>
                        : <span></span>}
                    </div>
                <div className="grid grid-cols-4 gap-4 pb-8">
                    <GallerySkeleton/>
                    <GallerySkeleton/>
                    <GallerySkeleton/>
                    <GallerySkeleton/>
                </div>
                </div>
                : 
                <div>
                    <div className="uppercase text-2xl font-thin text-center py-12">
                        <span>{result?.totalResults}</span> 
                        <span> results in </span>
                        {searchQuery ?
                        <span className="font-semibold">"{searchQuery}"</span>
                        : <span></span>}
                        {selectedCategory?
                        <span>"{selectedCategory}"</span>
                        : <span></span>}
                        {selectedCountry?
                        <span>"{selectedCountry}"</span>
                        : <span></span>}
                    </div>
                    <InfiniteScroll
                        dataLength= {result.articles? result.articles.length : 0}
                        next={getMoreArticles}
                        hasMore={hasMore}
                        loader= {<h1>Loading...</h1>}
                        endMessage={<div className="text-center">You've reached the end of this page</div>}
                    >
                    <div className="grid grid-cols-4 gap-4 pb-8">
                        {result?.articles?.map((el, index)=>(
                        <Gallery
                            key={index}
                            imgUrl={el.urlToImage}
                            title={el.title}
                            description={el.description} 
                            author={el.author} 
                            date={el.publishedAt}
                            url={el.url}
                        />
                        ))}
                </div>
                </InfiniteScroll>
                
            </div>
            }
        </div>
        </>
    )
}

export default Search;

