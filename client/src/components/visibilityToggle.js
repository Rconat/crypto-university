import React, { useState } from 'react'

const ToggleVisibility = (component, visibility = false) => {
    const [visible, setVisible] = useState(() => visibility)

    return [visible ? component : null, () => setVisible((v) => !v)]
}

export default ToggleVisibility