import React from 'react';
import { useSnackbar } from 'notistack';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { resetAlert } from '../../redux/action/alertActions';

function Alert(props) {
	const { enqueueSnackbar, closeSnackbar } = useSnackbar();
	const { text, color } = useSelector(state => state.alert)
	const dispatch = useDispatch()

	const action = snckbarId => <button onClick={() => closeSnackbar(snckbarId)}>close</button>

	useEffect(() => {
		if (text) {
			enqueueSnackbar(text, {
				variant: color,
				anchorOrigin: {
					vertical: 'top',
					horizontal: 'right'
				},
				autoHideDuration: 5000,
				preventDuplicate: false,
				action
			})

			setTimeout(() => { dispatch(resetAlert()) }, 2000)
		}

	}, [text, dispatch, color])

	return (
		<div>

		</div>
	);
}

export default Alert;