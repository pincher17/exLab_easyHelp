import React from 'react'

import { Navigate, Route, Routes } from 'react-router-dom'

import WorkerBlank from 'containers/WorkerBlank'
import AccountPage from 'pages/AccountPage'
import ApplicantsPage from 'pages/ApplicantsPage'
import FaqPage from 'pages/FaqPage'
import JobCreationPage from 'pages/jobCreationPage'
import LoginPage from 'pages/LoginPage'
import MainPage from 'pages/MainPage'
import RegisterPage from 'pages/RegisterPage'
import UserApplicantPage from 'pages/UserApplicantPage'
import VacanciesPage from 'pages/VacanciesPage'

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="*" element={<Navigate to="/" />} />
      <Route path="vacancy/new" element={<JobCreationPage />} />
      <Route path="vacancies" element={<VacanciesPage />} />
      <Route path="applicant" element={<WorkerBlank />} />
      <Route path="applicants">
        <Route index element={<ApplicantsPage />} />
        <Route path=":id" element={<UserApplicantPage />} />
      </Route>
      <Route path="faq" element={<FaqPage />} />
      <Route path="account" element={<AccountPage />} />
    </Routes>
  )
}

export default AppRouter
