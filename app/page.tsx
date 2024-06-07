import TaxiCalculator from 'app/components/TaxiCalculator'
import Footer from './components/footer'

export default function HomePage() {
  return (
    <div className="container mx-auto p-4">
      <TaxiCalculator />
      <Footer/>
    </div>
  )
}
