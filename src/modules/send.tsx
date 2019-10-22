const MOVE = 'counter/MOVE' as const;

type CounterAction =
    | ReturnType<typeof sendBy>;


export const sendBy = (diff: string) => ({
    type: MOVE,
    payload: diff
});

type CounterState = {
    count: string;
}

const initialState: CounterState = {
    count: ''
};

function send(state: CounterState = initialState, action: CounterAction) {
    switch (action.type) {
        case MOVE:
            return { count: state.count + action.payload };
        default:
            return state;
    }
}

export default send;
