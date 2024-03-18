"use client"
import Link from "next/link";
//image;
import Image from "next/image";
//icons
import googlePodcastIcon from '../../../public/google podcast.png';
import youtubeIcon from '../../../public/youtube.png';
import spotifyIcon from '../../../public/spotify.png';
//Hooks
import { useState } from "react";

//MOCK BACKEND DATA;
const episodes = {
    epiID: 1,
    title:"Are You a Perplexed Mind Person?",
    imgCover:"/epiCover.png",
    description:"Unable to grasp something clearly or to think logically and decisively about something that you really put your mind to?",
    niche:['mind-behaviour','health'],
    hostImgs:["/epiAvatar1.png","/epiAvatar2.png"]
};

export default function Episodes(){
    const [epiState, setEpiState] = useState([episodes, episodes,episodes, episodes,episodes, episodes, episodes,episodes, episodes,episodes, episodes,episodes, episodes, episodes, episodes, episodes,episodes, episodes,episodes, episodes, episodes,episodes, episodes,episodes, episodes,episodes, episodes, episodes,episodes]);
    const [pageIndex, setPageIndex] = useState({
        firstI:0,
        lastI:9
    });
    const [paginationIndex, setPaginationIndex] = useState({
        nextIndx:4,
        prevIndx:0
    })
    console.log(epiState.length)
    //PAGINATION LOGIC
    let epiLength = epiState.length;
    let pages = epiLength/9;
    let pageBox = []
    for(let x = 1; x<=Math.ceil(pages); x++){
        pageBox.push(x);
    }

    let firstIndx = (p:any):any=>{
        p = (Number(p) * 9) - 9;
        console.log(p)
        return p;
    }
    let lastIndx = (p:any):any=>{
        p = 9*Number(p);
        console.log(p)
        return p;
    }

    function nextPage(p:any){
        setPageIndex({
            firstI: firstIndx(p),
            lastI: lastIndx(p)
        })
       
    }
    

    function nextNav(e:any){
       if(e === "next" && !(paginationIndex.nextIndx >= pageBox.length)){
        setPaginationIndex({
            nextIndx: paginationIndex.nextIndx+4,
            prevIndx: paginationIndex.prevIndx+4
        })
       }else if(e ==="prev" && !(paginationIndex.prevIndx <= 0)){
        setPaginationIndex({
            nextIndx: paginationIndex.nextIndx-4,
            prevIndx: paginationIndex.prevIndx-4
        })
       }
    }

    return(
        <section className="px-28 pt-28 ">
            <div className="p-5 text-center">
                <h1 className="text-3xl font-semibold">Latest Episode</h1>
            </div>
            <div className="py-6">
                <nav className="flex justify-between">
                    <button>All</button>
                    <button>Business</button>
                    <button>Comedy</button>
                    <button>Education</button>
                    <button>Health</button>
                    <button>News</button>
                    <button>Tech</button>
                </nav>
            </div>
            <hr className=" border"/>
            <div className="grid grid-cols-3 gap-4 pt-6 pb-14 articleCard">
            {epiState.length > 0? epiState.slice(pageIndex.firstI,pageIndex.lastI).map((episode,key)=> {
            return (

            <article key={key} >
                <div className="p-2 rounded-md border border-slate-800">
                    <div className="flex place-items-center space-x-3 mb-4">
                        <div className="relative">
                            <Image src={episode.imgCover} alt="cover image" width={166} height={166} className="rounded"/>
                            <div className="absolute right-1 top-2 flex space-x-1">
                                <Link href='#'><Image src={googlePodcastIcon} alt='Google podIcon' className="w-3"/></Link>
                                <Link href='#'><Image src={youtubeIcon} alt='Youtube podIcon' className="w-3"/></Link>
                                <Link href='#'><Image src={spotifyIcon} alt='Spotify PodIcon' className="w-3"/></Link>
                            </div>
                        </div>
                        <div className="w-5/6 flex flex-col space-y-2 ">
                            <p className="text-sm text-red-700 font-semibold">Eps. {episode.epiID}</p>
                            <h3 className="text-[100%] font-bold cardTitle">{episode.title}</h3>
                            <hr />
                            <p className="text-[85%] text-slate-500">{episode.description}</p>
                        </div>
                    </div>
                    <div className="flex justify-between items-center ">
                        <div className="flex items-center space-x-1">
                            {episode.niche.map((nic,key)=> (<p key={key} className="text-[80%] text-slate-600 border py-1 px-2 rounded">{nic}</p>))}
                        </div>
                        <div className="flex items-center justify-between space-x-1">
                            <p className="text-[78%] text-slate-700 font-semibold">Hosted by:</p>
                            <div>
                                <div className="flex -space-x-1">
                                    {episode.hostImgs.map((img,key)=>{
                                        return(
                                           <Image key={key} src={img} alt="host image" width={26} height={26} className="w-5 rounded-full"/>
                                        )
                                    })}
                                </div>
                            </div>   
                        </div>
                    </div>
                </div>  
            </article>) }) : <p>No Avaliable Episodes.</p>}
            </div>

            {/* PAGINATION */}
            <div className="flex justify-end space-x-2 py-4">
            <button className="text-sm" onClick={(e:any):any=>nextNav(e.target.textContent)}>prev</button>

            {pageBox.length > 1 && pageBox.slice(paginationIndex.prevIndx, paginationIndex.nextIndx).map((n,key) => {
            return (
            <button 
            key={key} 
            className="border rounded px-1 text-sm"
            onClick={(e:any):any => nextPage(e.target.textContent)}
            >
            {n}
            </button>
            )
            })}
            
            {(pageBox.length > 4 ) && 
            <>
            <span className="text-sm">...</span>
            <button className="border rounded px-1 text-sm" 
            onClick={(e:any):any => nextPage(e.target.textContent)}
            >
            {pageBox.at(-1)}
            </button>
            </>}

            <button className="text-sm" onClick={(e:any):any=>nextNav(e.target.textContent)}>next</button>
            </div>
            
        </section>
    )
}