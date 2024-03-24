
import Hero from '../components/Hero'
import Reviews from '../components/Reviews'
import Mission from '../components/Mission'

export default function Home() {
  return (
    <div className='bg-black' data-bs-theme="light">
        <Hero />
      <Mission />
        <Reviews />
    </div>
  )
}
