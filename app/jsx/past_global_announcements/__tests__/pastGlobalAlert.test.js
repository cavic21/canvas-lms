/*
 * Copyright (C) 2020 - present Instructure, Inc.
 *
 * This file is part of Canvas.
 *
 * Canvas is free software: you can redistribute it and/or modify it under
 * the terms of the GNU Affero General Public License as published by the Free
 * Software Foundation, version 3 of the License.
 *
 * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY
 * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
 * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more
 * details.
 *
 * You should have received a copy of the GNU Affero General Public License along
 * with this program. If not, see <http://www.gnu.org/licenses/>.
 */

import PastGlobalAlert from '../PastGlobalAlert'
import {render} from '@testing-library/react'
import React from 'react'

describe('render past global announcement alert', () => {
  beforeAll(() => {
    window.ENV.PAST_ANNOUNCEMENTS_ENABLED = true
  })

  it('renders alert with message', async () => {
    const {findByTestId} = render(<PastGlobalAlert />)
    const event = new Event('globalAlertShouldRender')
    document.dispatchEvent(event)
    expect(await findByTestId('globalAnnouncementsAlert')).toBeVisible()
  })

  it('renders button on alert', async () => {
    const {findByTestId} = render(<PastGlobalAlert />)
    const event = new Event('globalAlertShouldRender')
    document.dispatchEvent(event)
    expect(await findByTestId('globalAnnouncementsButton')).toBeVisible()
  })
})
