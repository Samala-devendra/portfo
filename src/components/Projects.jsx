import React from 'react'
import Recipe from '../assets/Recipe.png'
import memorycardgame from '../assets/memorycardgame.png'
import Quiz from '../assets/Quiz.png'
import Drumkit from '../assets/Drumkit.png'
import Game2048 from '../assets/Game2048.png'
import Cards from './Cards'


const Projects = () => {

    const projectJson = [
        {
          title: 'Recipe app',
          desc:"RecipeApp Builders did an amazing job on our recipe app. Their professionalism and dedication to our project were outstanding. The app is user-friendly, well-designed, and packed with useful features that make exploring and sharing recipes a breeze",
          image: Recipe,
          live: "",
          github: ""
        },
        {
          title: 'Memory card game',
          desc: 'The team at Webelite Builders exceeded our expectations with their digital marketing expertise. Highly recommend!',
          image: memorycardgame,
          live: "",
          github: ""
        },
        {
          title: 'Quiz app',
          desc: 'Working with Webelite Builders was a seamless experience. They brought our vision to life with a modern, responsive website.',
          image: Quiz,
          live: "",
          github: ""
        },
        {
          title:'Drum kit',
          desc: 'Working with Webelite Builders was a seamless experience. They brought our vision to life with a modern, responsive website.',
          image: Drumkit,
          live: "",
          github: ""
        },
        {
          title: '2048 game',
          desc: 'Working with Webelite Builders was a seamless experience. They brought our vision to life with a modern, responsive website.',
          image: Game2048,
          live: "",
          github: ""
        },
      ];

  return (
    <section id='projects' className='relative bg-gray-700 py-10 px-4'>
      <div className='mb-16 max-w-7xl mx-auto'>
        <h2 className='text-3xl font-bold mb-8 text-white border-b border-red-500 w-max pb-4'>My Projects</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10'>
            {projectJson.map((items)=> {
                return <Cards item={items}/>
            })}
        </div>
      </div>
    </section>
  )
}

export default Projects
