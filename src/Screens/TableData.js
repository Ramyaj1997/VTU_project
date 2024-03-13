import React ,{useState ,useEffect} from "react";
import {Container,Table} from 'react-bootstrap';
import axios  from "axios";
import {ToWords} from 'to-words';

const TableData = ({studentId})=>{
    console.log("id",studentId)
    const[resultDetails,setResultDetails] = useState([])
    const toWords = new ToWords();
useEffect(()=>{
    axios.get('http://localhost:3002/studentinfo')
    .then((response)=>{
        console.log("resss",response.data)
        let temp =[]
        temp = response.data.filter((d) => d.registerId === studentId)
        setResultDetails(temp)

    })
    .catch((error) => console.log("error",error))
},[studentId])
      console.log("state2", resultDetails)
      const getTotalMarks =(value) => {
        console.log("value",value)
        let sum = 0
        resultDetails.map((d)=>{
            sum +=parseInt(d[value])
        })
        return sum
      }
     const finalResult = () =>{
        let count = 0;
        resultDetails.map((d) =>{
            if(d.result === 'FAIL'){
                count++;
            }
        })
        console.log("count",count)
        if(count >=1){
           return 'FAIL'
        }else{
           return 'PASS'
        }
     }
     const scoreHandler = ()=>{
        let sum =0;
        resultDetails.map((d) =>{
            sum +=parseInt(d.obtained_marks)
        })
        let status;
        if(sum >=250){
            status ='DISTINCATION'
        }else if(sum <250 && sum >=230){
            status = 'FIRST CLASSS'
        }else{
            status ='FAIL'
        }
        return status
     }

     const percentageHandler = () =>{
        let max_marks = getTotalMarks ('max_marks')
        let obtained_marks = getTotalMarks('obtained_marks')
        console.log("marks11" ,max_marks,obtained_marks)
        let x ='%',
        percent = Math.floor((obtained_marks/max_marks)*100)
        console.log("per",percent)
        return[percent,x]
     }
    const toWordsHandler = () =>{
        const a = getTotalMarks('obtained_marks')
        let text = toWords.convert(a)
        return text
    }
      

    return(
        <Container>
        <Table className="my-5" responsive bordered>
            <thead>
                <tr>
                    <th style ={{textAlign:"center"}}>Sl.no</th>
                    <th colSpan={2}>Subject
                    <th style ={{paddingLeft:'10rem',paddingRight:'8rem'}}>code</th>
                    <th style ={{paddingLeft:'10rem',paddingRight:'8rem'}}>Subject</th>
                    </th>
                    <th colSpan={3}>Examination Marks Obtanied
                    <th style ={{paddingLeft:'10rem',paddingRight:'8rem'}}>Max</th>
                    <th  style ={{paddingLeft:'10rem',paddingRight:'8rem'}}>Min</th>
                   
                    <th style ={{paddingLeft:'10rem',paddingRight:'8rem'}}>Obtanied</th>
                    </th>
                    <th style ={{paddingLeft:'10rem',paddingRight:'8rem'}}>Subject Result</th>

                </tr>
            </thead>
            <tbody>
               {
                resultDetails.map((data,index) =>(
                    <tr key={index}>
                        <td>{index+1}</td>
                       <td>{data.code}</td>
                       <td>{data.subject}</td>
                       <td>{data.max_marks}</td>
                       <td>{data.min_marks}</td>
                       <td>{data.obtained_marks}</td>
                       <td>{data.result}</td>
                    </tr> 
                 ))
               } 
               
            </tbody>
            <thead>
                <tr>
                    <th colSpan={3}>Grand Total</th>
                    <td>{getTotalMarks('max_marks')}</td>
                    <td>{getTotalMarks('min_marks')}</td>
                    <td>{getTotalMarks('obtained_marks')}</td>
                    <td>{finalResult()}</td>
                </tr>
            </thead>
        </Table>
        <p>
            <b>Total Marks Obtanied[in  Words]</b>{toWordsHandler()}
         
        </p>
        <p><b>Result Of Semister:</b>{finalResult()}</p>
        <p><b>Percntage:</b>{percentageHandler()}</p>
        <p><b>Date:</b>25 Dec 2024</p>
        </Container>
    )
}
export default TableData;