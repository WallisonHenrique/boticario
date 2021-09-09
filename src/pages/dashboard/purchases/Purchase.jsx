import { formatted } from '../../../utils/currency';
import { makeStyles, TableCell } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    noWrap: {
      whiteSpace: 'nowrap'
    },
}));

const Purchase = ({ cashback, code, date, percent, status, value }) => {
    const classes = useStyles();

    return (
        <>
            <TableCell>{code}</TableCell>
            <TableCell>{ formatted.format(value) }</TableCell>
            <TableCell><span className={classes.noWrap}>{date}</span></TableCell>
            <TableCell>{percent}%</TableCell>
            <TableCell>{ formatted.format(cashback) }</TableCell>
            <TableCell align="right"><span className={classes.noWrap}>{status}</span></TableCell>
        </>
    );
}

export default Purchase;