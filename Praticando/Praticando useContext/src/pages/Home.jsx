import Welcome from '../assets/welcome.svg'

export function Home() {
  return (
    <div className='welcome'>
      <img src={Welcome} alt="Welcome image" />
    </div>
  )
}
