'use client';

import Button from '@/components/Button';
import DropDown from '@/components/Button/DropDown';
import Section from '@/components/page-home/section';
import { AcceditationTab, Panel } from '@/components/Tab/AcceditationTab';
import Textfield from '@/components/Textfield';
import Timeline from '@/components/Timeline';
import Uploader from '@/components/Uploader';
import CompanyDetailsClipArt from '@/images/CompanyDetailsClipArt';
import DocumentsClipArt from '@/images/DocumentsClipArt';
import EmailIcon from '@/images/EmailIcon';
import LandMarkIcon from '@/images/LandMarkIcon';
import PhoneIcon from '@/images/PhoneIcon';
import RegistrationInfoClipArt from '@/images/RegistrationInfoClipArt';
import Link from 'next/link';

const Page = () => {
    return (
        <Section>
            <title>Centro | Register</title>
            <div className='flex justify-center mt-12'>
                <p className='text-[38px] text-center max-w-[720px]'>
                    Contractor and Subcontractor Accreditation
                </p>
            </div>
            <p className='text-xl my-3'>How To Get Accredited</p>
            <Timeline title='Prepare Your Information' step={1} timeline={1}>
                <div className='h-[500px] bg-white rounded-xl shadow-xl'>
                    <AcceditationTab
                        tabs={[
                            'Company Details',
                            'Registration Info',
                            'Documents',
                        ]}
                        defaultTab='Company Details'
                    >
                        <Panel tab='Company Details' className='h-full'>
                            <div className='h-full flex justify-center items-center gap-28 '>
                                <p className='max-w-[412px] text-xl'>
                                    Ensure your company profile is current and
                                    accurately represents your business.
                                    Identify your company’s classification and
                                    PCAB (Philippine Contractors Accreditation
                                    Board) category.
                                </p>
                                <CompanyDetailsClipArt />
                            </div>
                        </Panel>
                        <Panel tab='Registration Info' className='h-full'>
                            <div className='h-full flex justify-center items-center gap-28'>
                                <RegistrationInfoClipArt />
                                <p className='max-w-[412px] text-xl'>
                                    Have the registration dates from SEC
                                    (Securities and Exchange Commission) or DTI
                                    (Department of Trade and Industry) ready.
                                </p>
                            </div>
                        </Panel>
                        <Panel tab='Documents' className='h-full'>
                            <div className='h-full flex justify-center items-center gap-28'>
                                <p className='max-w-[412px] text-xl'>
                                    Ensure your company profile is current and
                                    accurately represents your business.
                                    Identify your company’s classification and
                                    PCAB (Philippine Contractors Accreditation
                                    Board) category.
                                </p>
                                <DocumentsClipArt />
                            </div>
                        </Panel>
                    </AcceditationTab>
                </div>
            </Timeline>
            <Timeline
                title='Complete the Form'
                step={2}
                timeline={2}
                className='flex justify-center'
            >
                <div className='min-h-[500px] max-w-[1000px] bg-white rounded-xl shadow-xl p-10'>
                    <Textfield label='Email' required />
                    <div className='grid grid-cols-2 gap-4'>
                        <Textfield label='Contact Person' required />
                        <Textfield label='Contact Number' required />
                        <Textfield label='Name of Company' required />
                        <Uploader
                            label='Updated Company Profile (PDF)'
                            name='qwe'
                            onChange={() => {}}
                            required
                        />
                        <DropDown
                            options={[
                                {
                                    label: 'Implementing Office 1',
                                    value: 'implementing_office_1',
                                },
                                {
                                    label: 'Implementing Office 2',
                                    value: 'implementing_office_2',
                                },
                            ]}
                            required
                            label='Classification'
                            error=''
                            name='classification'
                            onChange={(e) => {}}
                            placeholder='select from dropdown'
                        />
                        <DropDown
                            options={[
                                {
                                    label: 'Implementing Office 1',
                                    value: 'implementing_office_1',
                                },
                                {
                                    label: 'Implementing Office 2',
                                    value: 'implementing_office_2',
                                },
                            ]}
                            required
                            label='PCAB Category'
                            error=''
                            name='pcabCategory'
                            onChange={(e) => {}}
                            placeholder='select from dropdown'
                        />
                    </div>
                    <Textfield label='Date Registered (SEC or DTI)' required />
                    <div className='grid grid-cols-2 gap-4'>
                        <Uploader
                            label='SEC or DTI Registration'
                            name='qwe'
                            onChange={() => {}}
                            required
                        />
                        <Uploader
                            label='FORM 2303'
                            name='qwe'
                            onChange={() => {}}
                            required
                        />
                        <DropDown
                            options={[
                                {
                                    label: 'Implementing Office 1',
                                    value: 'implementing_office_1',
                                },
                                {
                                    label: 'Implementing Office 2',
                                    value: 'implementing_office_2',
                                },
                            ]}
                            required
                            label='PCAB Category'
                            error=''
                            name='pcabCategory'
                            onChange={(e) => {}}
                            placeholder='select from dropdown'
                        />
                        <DropDown
                            options={[
                                {
                                    label: 'Implementing Office 1',
                                    value: 'implementing_office_1',
                                },
                                {
                                    label: 'Implementing Office 2',
                                    value: 'implementing_office_2',
                                },
                            ]}
                            required
                            label='PCAB Category'
                            error=''
                            name='pcabCategory'
                            onChange={(e) => {}}
                            placeholder='select from dropdown'
                        />
                    </div>
                    <div className='flex justify-end'>
                        <Button
                            label='Submit'
                            variant='default'
                            className='font-medium border border-darkblue text-blue-700 
                        bg-transparent rounded-full w-fit px-10 h-[60px] mt-10 hover:text-base'
                        />
                    </div>
                    <p className='px-4 mt-9 leading-6 text-neutral-400 text-center'>
                        <span className='text-blue-700'>Note: </span>Rest
                        assured that all data shared on Centro is compliant with
                        the Philippine Data Privacy Act. Your privacy and data
                        security are our top priorities.
                    </p>
                </div>
            </Timeline>
            <Timeline
                title='Your Next Steps'
                step={2}
                timeline={2}
                borderLine={false}
            >
                <div className='px-40'>
                    <p className='text-center text-xl'>
                        After submitting your form, you’ll receive a
                        confirmation email with details and next steps. Our team
                        will review your submission, which may take some time.
                        If you have any questions or need assistance, don’t
                        hesitate to contact us directly.
                    </p>
                    <div className='min-h-[130px] w-full flex items-center text-blue-500'>
                        <div className='grid grid-cols-3'>
                            <div className='flex items-center'>
                                <div className='flex items-center gap-3'>
                                    <PhoneIcon />
                                    <p>+63 (02) 8282 9891</p>
                                </div>
                            </div>

                            <div className='flex items-center'>
                                <Link
                                    href={
                                        'https://mail.google.com/mail/u/0/?to=Connect@Philcentro.ph&fs=1&tf=cm'
                                    }
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='flex items-center gap-3 hover:text-blue-700'
                                >
                                    <EmailIcon className='shrink-0' />
                                    <p>Connect@Philcentro.ph</p>
                                </Link>
                            </div>
                            <div className='flex items-center '>
                                <div className='flex items-center gap-3'>
                                    <LandMarkIcon className='shrink-0' />
                                    <p>
                                        1932 A. Mabini cor San Andres
                                        Street,Brgy. 701, Malate, Manila, Metro
                                        Manila 1004 PH
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Timeline>
        </Section>
    );
};

export default Page;
