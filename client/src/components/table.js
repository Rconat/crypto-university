
const table = (props) => {
    return (
        <table className="table">
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
                {props.rows.map((currentRow, index) => (
                    <tr>
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

    )
}
export default table