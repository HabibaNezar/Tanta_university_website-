import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router-dom'

export default function NewsDetails() {
    const { id } = useParams()

    function getData() {
        return axios.get(`https://api-login.tanta.edu.eg/api/UniversityNews/${id}`)
            .then(res => res.data)
    }

    const { data, isLoading, error } = useQuery({
        queryKey: ['recentProduct', id],
        queryFn: getData,
        enabled: !!id
    })

    if (isLoading) return <p className="text-center mt-10">جاري التحميل...</p>
    if (error) return <p className="text-center mt-10 text-red-500">حدث خطأ أثناء تحميل البيانات</p>

    return (
        <div className="max-w-4xl mx-auto px-4 mt-32">
            <h1 className="text-2xl font-bold text-[--main-color] mb-4">{data.nameAr}</h1>

            {data.mainImageUrl && (
                <img
                    src={data.mainImageUrl}
                    alt="صورة الخبر"
                    className="w-full rounded-xl shadow mb-6"
                />
            )}

            <p className="text-lg text-gray-700 mb-6">{data.breifAr}</p>

            <div
                className="prose max-w-none leading-loose"
                dangerouslySetInnerHTML={{ __html: data.descriptionAr }}
            />

            <p className="text-sm text-gray-500 mt-10">تاريخ النشر: {new Date(data.publishedDate).toLocaleDateString('ar-EG')}</p>
        </div>
    )
}
