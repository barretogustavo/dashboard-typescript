import { useEffect, useState } from 'react'
import axios from 'axios'

type Employee = {
  id: number
  nome: string
  sobrenome: string
  dataNascimento: string
  sexo: string
  observacao: string
  created_at: string
  updated_at: string
}

const useListAllEmployees = () => {
  const [employee, setEmployee] = useState<Employee[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/funcionarios')
        setEmployee(response.data)
      } catch (err) {
        setError('Erro ao obter a lista de funcionários.')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return { employee, loading, error }
}

export default useListAllEmployees
