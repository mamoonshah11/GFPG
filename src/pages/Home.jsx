import { FiCoffee } from 'react-icons/fi'
import Card from '../components/Card'

function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-gray-900 text-white">
      <FiCoffee size={48} className="text-amber-400" />
      <h1 className="text-3xl font-bold">Home Page</h1>
      <Card title="Welcome">
        <p>This is a reusable card component.</p>
      </Card>
    </div>
  )
}

export default Home
