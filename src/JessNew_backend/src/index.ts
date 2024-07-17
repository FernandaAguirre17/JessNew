import { Server } from 'azle';
import express from 'express';
import cors from 'cors';

export default Server (() => {
    const App = express ();
    App.use(cors());
    return App.listen();
})
