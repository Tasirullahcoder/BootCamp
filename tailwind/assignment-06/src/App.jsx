import React from 'react'
import Navbar from './components/Navbar'
import Card from './components/Card'
import Button from './components/Button'

const App = () => {
  return (
    <>
      <main className="w-[1440px] h-[1024px] mx-auto">
        <Navbar />
        <Card>
          <div className="flex gap-2 mb-2">
            <Button text="User Stories" />
            <Button
              text="Roadmaps"
              borderColor="border-[#DC71FF]"
              textColor="text-[#DC71FF]"
            />
            <Button text="Storyboards" />
            <Button text="Data Dashboards" />

            <Button text="Work Flowdaigrams" />
          </div>
          <div className="flex gap-2">
            <Button text="Task and Priority List" />
            <Button text="Map and Persnoas" />
            <Button text="Task And Validation Plans" />
            <Button text="Charts Users" />
            <Button text="Documentations" />
          </div>
        </Card>
      </main>
    </>
  )
}

export default App
