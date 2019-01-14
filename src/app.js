import React, { lazy, Suspense } from 'react';
import { render } from 'react-dom';

const Avatar = lazy(() => import('./component/avatar/avatar.component'));
const Icon = lazy(() => import('./component/icon/icon.component'));
const Button = lazy(() => import('./component/button/button.component'));

render(
    <div>
        <Suspense fallback={<div>Loading...</div>}>
            <Avatar>
                <Icon>close</Icon>
            </Avatar>
            <Button>Hallo</Button>
            <Button type="gradient">Hallo</Button>
        </Suspense>
    </div>,
    document.getElementById('app')
);
