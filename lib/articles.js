export async function getEverything(){
    const res = await fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=792801b246b54a68b9e3c692f226b7c3')
    const data = await res.json()

    return data
}

export async function getCategory(id){
    const res = await fetch(`https://newsapi.org/v2/top-headlines?q=${id}&apiKey=792801b246b54a68b9e3c692f226b7c3`)
    const data= res.json()

    return data
}

export async function getFiltered(searchQuery = '', selectedCategory = '', selectedCountry = '', pageNum = 1){
    try{
    const res = await fetch(`https://newsapi.org/v2/top-headlines?country=${selectedCountry}&page=${pageNum}&pageSize=12&category=${selectedCategory}&q=${searchQuery}&apiKey=792801b246b54a68b9e3c692f226b7c3`)
    const data = await res.json()
    return data;
    }catch(error){
        console.error('Error in getFiltered', error);
        return null;
    }
}

//792801b246b54a68b9e3c692f226b7c3
//b12145a9cd374c1dac7e73b96a062c81
//4279b427018c4ec7b189c4073726b1bb
//213de044c1ba4465b2f5d7b44689724b