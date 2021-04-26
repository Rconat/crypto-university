
const table = (props) => {
    return (
        <div id="table" style={{ overflowX: 'auto'}}>
            <table className="table" >
                <thead>
                    <tr>
                        {props.columns.map((item, index) => {
                            return (
                                <th scope="col" style={item.style} key={index}>{item.header}</th>
                            )
                        })}
                    </tr>
                </thead>
                <tbody>
                    {props.rows.map((currentRow, rowIndex) => (
                        <tr key={rowIndex}>
                            {props.columns.map((item, index) => {
                                return (
                                    <th scope="row" key={index}>{
                                        item.content ? item.content(currentRow) : currentRow[item.field]
                                    }</th>
                                )
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default table