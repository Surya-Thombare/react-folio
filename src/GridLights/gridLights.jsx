import React, {useState} from 'react'
import Button from '../Components/Button'

const GridLights = () => {

    const [order, setOrder] = useState([])
    const [isDeactivating, setIsDeactivating] = useState(false)

    const config = [
        [1,1,1],
        [1,0,1],
        [1,1,1]
    ]

    const deactivateButton = () =>{
        setIsDeactivating(true);

        const timer = setInterval(() => {
            setOrder((originalOrder) => {
                const newOrder = originalOrder.slice()
                newOrder.pop()

                if (newOrder.length === 0) {
                    clearInterval(timer)
                    setIsDeactivating(false);
                }

                return newOrder;
            })
        }, 300);
    }

    const ActivateButton = (index) => {
        const newOrder = [...order, index]
        setOrder(newOrder)

        if (newOrder.length === config.flat(1).filter(Boolean).length) {
            deactivateButton()
    }
    }

  return (
    <div className='wrapper'>
        <div 
        className='grid-lights'
        style={{
            gridTemplateColumns: `repeat(${config[0].length}, 1fr)`
        }}
        >
        {config.flat(1).map((value, i) => {
            return value ? (
                <Button 
                label={`cell-${i}`}
                key={i}
                filled={order?.includes(i)}
                onClick={()=>ActivateButton(i)}
                isDisable={order.includes(i) || isDeactivating}
                />
            ) : <span></span>
        })}
        </div>
    </div>
  )
}

export default GridLights