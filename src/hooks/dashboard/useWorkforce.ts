import { getWorkforce } from '@/data/dashboard'
import { useQuery } from '@tanstack/react-query'

const useWorkforce = () => {
    return useQuery({
        queryKey: ['workforce-util'],
        queryFn: () => getWorkforce(),
    })
}

export default useWorkforce
