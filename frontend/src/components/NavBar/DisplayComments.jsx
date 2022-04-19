import CustomButton from "../CustomButton/CustomButton";


const DisplayComments = (props) => {
  
  return (
    <table className="table"> 
      <thead>
        <tr>
          <th></th>

        </tr>
      </thead>
      <tbody>
        {props.parentComments.map((comment) => {
          return (
            <tr>
              <tr>
                <td>{comment.name}</td>
              </tr>
              <tr>
                <td>{comment.text}</td>
              </tr>
              <tr>
                <CustomButton comment="👍"/> 
                <CustomButton comment="👎"/>
              </tr>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default DisplayComments;
