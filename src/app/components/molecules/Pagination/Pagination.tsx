'use client';


import './Pagination.scss'
import { IoChevronBack, IoChevronForward } from 'react-icons/io5'
import { useRouter, useSearchParams } from 'next/navigation';
import { IVehiclesResponse } from '@/app/core/application/dto/vehicles/get-vehicles-response.dto';
import ButtonIcon from '../../atoms/ButtonIcon/ButtonIcon';


interface IPaginationProps{
    data: IVehiclesResponse
  }

const Pagination:React.FC<IPaginationProps> = ({data}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const onPageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', newPage.toString());

    router.push(`?${params.toString()}`);
  } 

  const currentPage = data.metadata.currentPage;

  return (
    <div className='pagination-container'>
        <ButtonIcon onClick={()=> onPageChange(currentPage-1)} className={currentPage===1 ? 'hidden' : 'pagination-button'} > <IoChevronBack /></ButtonIcon>
        Página {currentPage} de {data.metadata.totalPages}
        <ButtonIcon onClick={()=> onPageChange(currentPage+1)} className={data.metadata.totalPages === currentPage ? 'hidden' : 'pagination-button'}> <IoChevronForward /></ButtonIcon>
    </div>
  )
}

export default Pagination