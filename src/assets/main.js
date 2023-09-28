const url = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCYZPuestEjLU0YShdM2wmtw&part=snippet%2Cid&order=date&maxResults=9';
const content = null || document.getElementById('content')
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0dcc9144bdmsh9766aeb7f19d68bp1cef04jsn0cdd6b6236d0',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

const fetchData = async (urlApi) => {
    const response = await fetch(urlApi, options)
    const data = await response.json()
    return data
}

(async (urlApi) => {
    try {
        const videos = await fetchData(urlApi)
        let view = `
        ${videos.items.map(video => 
            `
            <div class="group relative">
                <div class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hiddengroup-hover:opacity-75 lg:aspect-none">
                    <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
            </div>
            <div class="mt-4 flex justify-between">
                    <h3 class="text-sm text-gray-700">
                        <span aria-hidden="true" class="absolute inset-0"></span>
                        ${video.snippet.title}
                    </h3>
            </div>
            </div>
            `
        )}   
        `
        content.innerHTML = view
    }catch (error) {
        console.log(error);
    }
})(url);