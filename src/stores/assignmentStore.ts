import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { Assignment } from '../assets/Commons'

// 現在読み込んでいる課題の状況を管理するストア
export const useAssignmentStore = defineStore('assignment', () => {
  const selectedAssignment = ref<Assignment>({
    id: 1,
    title: '',
    description: '',
    assignments: []
  })

  return {
    selectedAssignment
  }
  // 永続化したい場合は,最後に{persist: true}を追加する
})
