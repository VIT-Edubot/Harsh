const EmployeCard = ({Name,Position,Department})=>{
    return (
        
        <div className = "Card">
        <h3 className="text-lg font-bold"><strong>Name: </strong>{Name}</h3>
        <p className="text-gray-600"><strong>Position: </strong>{Position} </p>
        <p className="text-gray-500"><strong>Department: </strong>{Department}</p>
        </div>
    );
};
export default EmployeCard;