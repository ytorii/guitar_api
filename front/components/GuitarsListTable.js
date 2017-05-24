import React         from 'react'
import GuitarElememt from '../containers/GuitarElement'

const GuitarsListTable = ({guitars}) => {
  return (
    <table>
      <thead>
        <tr><th>ModelName</th><th>Maker</th></tr>
      </thead>
      <tbody>
        { guitars.map((entityId) =>
          <GuitarElememt key={ entityId } entityId={ entityId } /> 
        )}
      </tbody>
    </table>
  )
}

export default GuitarsListTable
