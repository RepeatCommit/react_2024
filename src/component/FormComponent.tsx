import React from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {postValidator} from "../validators/post.validator";
import {FormPost} from "../model/FormPost";
import {apiService} from "../service/api.service";





const FormComponent = () => {

    const {handleSubmit, register, formState:{errors, isValid

        }} = useForm<FormPost>({mode: 'all', resolver:joiResolver(postValidator)});

    const customHandler = (dataFromForm:FormPost) => {

        apiService.post.savePost(dataFromForm);

    };

    return (

        <form onSubmit={handleSubmit(customHandler)}>
            <div>
                <label>
                    <input type="text" placeholder={'title'} {...register('title')}/>
                    {errors.title && <p>{errors.title.message}</p>}
                </label>
            </div>
            <div>
                <label>
                    <input type="text" placeholder={'body'} {...register('body')}/>
                    {errors.body && <p>{errors.body.message}</p>}

                </label>
            </div>

            <div>
                <label>
                    <input type="text" placeholder={'userId'} {...register('userId')}/>
                    {errors.userId && <p>{errors.userId.message}</p>}

                </label>
            </div>

            <button disabled={!isValid}>save</button>
        </form>
    );
};

export default FormComponent;