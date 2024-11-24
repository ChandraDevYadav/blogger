import React from 'react'

const Test = () => {
  return (
    <div>
        <div class="grid grid-rows-3 grid-flow-col gap-4">
  <div class="row-span-3 bg-red-600">01</div>
  <div class="col-span-2 bg-pink-600">02</div>
  <div class="row-span-2 col-span-1 bg-green-600">03</div>
  <div class="row-span-2 col-span-1 bg-green-600">03</div>
</div>
    </div>
  )
}

export default Test