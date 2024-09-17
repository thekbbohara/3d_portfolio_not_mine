

const Song = () => {
  return (
    <div className="mt-24 px-10">
        <h1 className='text-blue-500 text-[30px] font-bold text-center mb-2'>Songs 🎧</h1>
        <h2 className='text-white font-bold text-[18px] text-center mb-10'>Listen to some songs 🎧</h2>
        <iframe style={{borderRadius: 12}} src="https://open.spotify.com/embed/playlist/0pItJtbfCvzUu5M0LmUAwV?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </div>
  )
}

export default Song
