import { useEffect } from 'react';

const useStationActivation = (elementReferense, active) => {
    useEffect(() => {
        if (!elementReferense) {
            return;
        }

        elementReferense.style.maxHeight = active 
            ? (elementReferense.scrollHeight * 2) + 'px' 
            : 0;    
    }, [active]);
}

export default useStationActivation;
