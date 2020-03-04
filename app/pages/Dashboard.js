import React from 'react';
import Link from 'next/link';

export default function Dashboard() {
    return (
        <div>
            <div>User's dashboard</div>
            <Link href="/Sheet">
            <button>character sheet</button>
            </Link>
        </div>
    )
}
