import React from 'react';
import { render } from '@testing-library/react';

import MissionsList from './MissionsList';

test('MissionsList renders', () => {
    // arrange act assert
    render(<MissionsList missions={[]} />)

});

test('MissionsList renders valid data ', () => {
    const mockData = [{mission_id: 'id1', mission_name: 'mission one'}];
    const {queryAllByText, rerender} = render(<MissionsList missions={[]} />)

    let allMissions = queryAllByText(/mission/i);
    expect(allMissions).toHaveLength(0);
    expect(allMissions).toStrictEqual([]);

    // these should fail
    // expect(allMissions).toHaveLength(1);
    // expect(allMissions).toStrictEqual([{}]);

    rerender(<MissionsList missions={mockData} />);

    allMissions = queryAllByText(/mission/i);
    expect(allMissions).toHaveLength(1);
 
});