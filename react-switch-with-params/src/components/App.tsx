import MyPage, {TymblerType } from './Tymbler'

export const paramss: TymblerType= {
  type:'text',
  name:'primary'}
;

function App() {
 
  
  
 
  return (
    <div>
    <MyPage {...paramss}/>
    </div>

  )
}

export default App;
