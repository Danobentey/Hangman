const HEAD = (
  <div style={{
    width: '50px',
    height: '50px',
    borderRadius: '100%',
    border: '10px solid',
    position: 'absolute',
    top: '50px',
    right: '-30px',
  }} />
)
const BODY = (
  <div style={{
    width: '10px',
    height: '100px',
    background: 'black',
    position: 'absolute',
    top: '120px',
    right: '0',
  }} />
)
const RIGHTARM = (
  <div style={{
    width: '100px',
    height: '10px',
    background: 'black',
    position: 'absolute',
    right: '-100px',
    top: '150px',
    rotate: '-30deg',
    transformOrigin: 'left bottom'
  }} />
)

const LEFTARM = (
  <div style={{
    width: '100px',
    height: '10px',
    background: 'black',
    position: 'absolute',
    right: '10px',
    top: '150px',
    rotate: '30deg',
    transformOrigin: 'right bottom'
  }} />
)
const RIGHTLEG = (
  <div style={{
    width: '100px',
    height: '10px',
    background: 'black',
    position: 'absolute',
    right: '-100px',
    top: '210px',
    rotate: '60deg',
    transformOrigin: 'left top'
  }} />
)
const LEFTLEG = (
  <div style={{
    width: '100px',
    height: '10px',
    background: 'black',
    position: 'absolute',
    right: '10px',
    top: '210px',
    rotate: '-60deg',
    transformOrigin: 'right top'
  }} />
)

const BODY_PARTS = [ HEAD, BODY, LEFTARM, RIGHTARM, LEFTLEG, RIGHTLEG,]

type HangmanDrawingProps = {
  numberOfGuesses: number
}

export function HangmanDrawing( {numberOfGuesses} : HangmanDrawingProps ) {
  return (
    <div style={{position: 'relative'}}>
      {BODY_PARTS.slice(0, numberOfGuesses)}

      <div style={{
        width: '10px',
        height: '50px',
        background: 'black',
        position: 'absolute',
        right: '0'
      }} />
      <div style={{
         width: '200px',
         height: '10px',
         background: 'black',
         marginLeft: '120px' 
      }} />

      <div style={{
        width: '10px',
        height: '400px',
        background: 'black',
        marginLeft: '120px' 
      }} />
      <div style={{
        width: '250px',
        height: '10px',
        background: 'black',
      }} />
    </div>
  )
}