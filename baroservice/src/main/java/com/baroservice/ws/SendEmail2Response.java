
package com.baroservice.ws;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>anonymous complex type�� ���� Java Ŭ�����Դϴ�.
 * 
 * <p>���� ��Ű�� ������ �� Ŭ������ ���ԵǴ� �ʿ��� �������� �����մϴ�.
 * 
 * <pre>
 * &lt;complexType&gt;
 *   &lt;complexContent&gt;
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType"&gt;
 *       &lt;sequence&gt;
 *         &lt;element name="SendEmail2Result" type="{http://www.w3.org/2001/XMLSchema}int"/&gt;
 *       &lt;/sequence&gt;
 *     &lt;/restriction&gt;
 *   &lt;/complexContent&gt;
 * &lt;/complexType&gt;
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "", propOrder = {
    "sendEmail2Result"
})
@XmlRootElement(name = "SendEmail2Response")
public class SendEmail2Response {

    @XmlElement(name = "SendEmail2Result")
    protected int sendEmail2Result;

    /**
     * sendEmail2Result �Ӽ��� ���� �����ɴϴ�.
     * 
     */
    public int getSendEmail2Result() {
        return sendEmail2Result;
    }

    /**
     * sendEmail2Result �Ӽ��� ���� �����մϴ�.
     * 
     */
    public void setSendEmail2Result(int value) {
        this.sendEmail2Result = value;
    }

}
