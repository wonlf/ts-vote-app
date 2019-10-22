import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { sendBy } from '../modules/send';
import { useCallback } from 'react';

export default function useSend() {
    const count = useSelector((state: RootState) => state.send.count);
    const dispatch = useDispatch();


    const onSend = useCallback(
        (diff: string) => dispatch(sendBy(diff)),
        [dispatch]
    );

    return {
        count,
        onSend
    };
}
