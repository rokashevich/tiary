package com.wa16ka.tiary;

import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.TextView;
import android.widget.Toast;
import android.content.Intent;

import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {
    private static final String LOG_TAG =
            MainActivity.class.getSimpleName();
    private int mCount = 0;
    private TextView mShowCount;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        try { // прячем заголовок https://stackoverflow.com/a/46709914
            this.getSupportActionBar().hide();
        } catch (NullPointerException e) {
        }
        Log.d("MainActivity", "Hello World");
        mShowCount = (TextView)findViewById(R.id.show_count);
    }

    public void countUp(View view) {
        ++mCount;
        if (mShowCount!=null)mShowCount.setText(Integer.toString(mCount));
        Toast toast = Toast.makeText(this, R.string.toast_message, Toast.LENGTH_SHORT);
        toast.show();
    }

    public void launchSecondActivity(View view) {
        Log.d(LOG_TAG, "Button clicked!");
        Intent intent = new Intent(this, SecondActivity.class);
        startActivity(intent);
    }
}