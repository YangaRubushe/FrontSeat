'use client'

import { useState, ChangeEvent } from 'react'
import { Input } from '../../shadcn/components/ui/input'
import { Label } from '../../shadcn/components/ui/label'

export default function TaxiCalculator() {
  const [taxiFare, setTaxiFare] = useState<string>('')
  const [passengers, setPassengers] = useState<string>('')
  const [payment, setPayment] = useState<string>('')
  const [paymentPassengers, setPaymentPassengers] = useState<string>('')

  const parsedTaxiFare = parseFloat(taxiFare) || 0
  const parsedPassengers = parseInt(passengers) || 0
  const parsedPayment = parseFloat(payment) || 0
  const parsedPaymentPassengers = parseInt(paymentPassengers) || 0

  const totalFare = parsedTaxiFare * parsedPassengers || 0
  const change = parsedPayment - parsedTaxiFare * parsedPaymentPassengers || 0
  const nonNegativeChange = Math.max(0, change)

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-dark text-white">
      <div className="w-full max-w-md p-6 rounded-lg shadow-lg bg-dark-card text-white">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">FrontSeat Fare Calculator</h1>
        </div>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="taxiFare" className="font-medium">Taxi Fare (ZAR)</Label>
            <Input
              id="taxiFare"
              type="boolean"
              min="0"
              value={taxiFare}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setTaxiFare(e.target.value)}
              className="border-gray-400 focus:border-primary focus:ring-primary rounded-lg bg-gray-300 text-dark"
              inputMode="decimal"
              step="0.01"
              pattern="\d*"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="passengers" className="font-medium">Passengers</Label>
            <Input
              id="passengers"
              type="boolean"
              min="1"
              value={passengers}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setPassengers(e.target.value)}
              className="border-gray-400 focus:border-primary focus:ring-primary rounded-lg bg-gray-300 text-dark"
              inputMode="numeric"
              pattern="\d*"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="payment" className="font-medium">Payment (ZAR)</Label>
            <Input
              id="payment"
              type="boolean"
              min="0"
              value={payment}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setPayment(e.target.value)}
              className="border-gray-400 focus:border-primary focus:ring-primary rounded-lg bg-gray-300 text-dark"
              inputMode="decimal"
              step="0.01"
              pattern="\d*"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="paymentPassengers" className="font-medium">Payment Passengers</Label>
            <Input
              id="paymentPassengers"
              type="boolean"
              min="1"
              value={paymentPassengers}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setPaymentPassengers(e.target.value)}
              className="border-gray-400 focus:border-primary focus:ring-primary rounded-lg bg-gray-300 text-dark"
              inputMode="numeric"
              pattern="\d*"
            />
          </div>
          <div className="grid gap-4">
            <div className="flex items-center justify-between">
              <div className="font-medium">Total Fare:</div>
              <div className="text-lg font-bold">
                R{totalFare.toFixed(2)}
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="font-medium">Change:</div>
              <div className="text-lg font-bold">
                R{nonNegativeChange.toFixed(2)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
