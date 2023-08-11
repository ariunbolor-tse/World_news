
const BannerSkeleton = () =>{
    return(
    <div className="pt-8 animate-pulse">
      <div className="mb-8 flex items-center gap-8 h-72 w-full">
        <div className="w-1/2 h-5/6 overflow-hidden rounded-2xl bg-gray-200">  
        </div>
        <div className='w-1/2 h-5/6'>
            <div className='h-full w-full '>
                <p className='mb-4 h-4 bg-gray-200 w-1/3 rounded-2xl'></p>
                <div className="rounded-2xl w-full h-6 mb-4 bg-gray-200">
                </div>
                <div className='bg-gray-200 w-1/2 h-4 mb-4 rounded-2xl'>
                </div>
                <div className='w-1/3 h-4 rounded-2xl bg-gray-200'>
                </div>
            </div>
        </div>
      </div>
    </div>
    )
}

export default BannerSkeleton;