import React from "react"

type PageProps = {
    params: {
        searchterm: string
    }
}

type SearchResult = {
    organic_results: [
        {
            position: number;
            title: string;
            link: string;
            thumbnail: string;
            snippet: string;
        }
    ]
}

const search = async(searchterm: string) => {
    // Fetching from an API and pulling the Search Input text requested by the user
    const res = await fetch(
        `https://serpapi.com/search.json?q=${searchterm}/&api_key=${process.env.API_KEY}`
        )
        const data = await res.json()
        return data
}

async function SearchResults({params: {searchterm}}: PageProps) {

    const searchResults = await search(searchterm)
    return (
        <div>
            <p className="text-gray-500 text-sm">You searched for:</p>
            
            <ol className="space-y-5 p-5">
            {searchResults.organic_results.map((result: any) => (
                <li key={result.position} className="list-decimal">
                    <p className="font-bold">{result.title}</p>
                    <p>{result.snippet}</p>
                </li>
            ))}
            </ol>
        </div>
    )
}

export default SearchResults