import fetchAdviceRepositories from '@/api/repositories'
import { ref, watch } from 'vue'

export default async function useAdviceRepositories(query) {
  console.log(query)
  const repositories = ref([])
  const getAdviceRepositories = async () => {
    repositories.value = await fetchAdviceRepositories(query.value)
  }
  await getAdviceRepositories();
  // onMounted(getAdviceRepositories)
  watch(query, getAdviceRepositories)

  return {
    repositories,
    getAdviceRepositories
  }
}